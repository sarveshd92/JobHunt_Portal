import { application } from "../models/Application.model.js";
import { job } from "../models/job.model.js";

export const applyjob = async (req, res) => {
    try {
        // console.log(req.cookies);
        const userid = req.id;  // Ensure this is correct based on your auth middleware
        const jobid = req.params.id;  // Use jobid instead of id if that's the actual param name

        console.log("Job ID:", jobid);
        console.log("User ID:", userid);

        // Check if user has already applied for the job
        const existingApplication = await application.findOne({ applicant: userid, job: jobid });
        if (existingApplication) {
            return res.status(400).json({
                message: "User already applied",
                success: false,
            });
        }

        // Check if job exists
        const jobExists = await job.findById(jobid);
        if (!jobExists) {
            return res.status(404).json({
                message: "Invalid job ID",
                success: false,
            });
        }

        // Create a new application
        const newApplication = await application.create({
            job: jobid,
            applicant: userid,
            status: "Pending",
        });

        // Update job with the new application ID
        jobExists.application.push(newApplication._id);
        await jobExists.save();

        return res.status(200).json({
            message: "User applied for the job successfully",
            result: newApplication,
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
        });
    }
}; 

export const appliedjob = async (req, res) => {
    try {
        const userid = req?.id;  // Ensure this is correct based on your auth middleware
                console.log(req.id)
                const applications = await application.find({ applicant: userid })
                .populate({
                  path: 'job',
                  select: '-createdby -application',
                  populate: {
                    path: 'company' // Populating the company within the job
                  }
                })
                .populate({
                  path: 'applicant',
                  select: '-password' // Excluding the password field
                });
              
        if (!applications.length) {
            return res.status(200).json({
                result:[],
                message: "No jobs applied for this user",

                success: false,
            });
        }

        return res.status(200).json({
            message: "Applied jobs found successfully",
            result: applications,
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
        });
    }
};

export const updatestatus = async (req, res) => {
    try {
        const { status,userid} = req.body;
       // const userid = req.id;  // Ensure this is correct based on your auth middleware
        const appid = req.params.id;  // Use appid instead of id if that's the actual param name
            console.log("status",status)        // Find the application
            console.log("appid",req.params)        // Find the application
            console.log("userid",userid)        // Find the application
        const applicationFound = await application.findOne({ applicant: userid, _id: appid });
        if (!applicationFound) {
            return res.status(404).json({
                message: "Application not found",
                success: false,
            });
        }

        // Update the status
        const updatedApplication = await application.findByIdAndUpdate(appid, { status }, { new: true });

        return res.status(200).json({
            message: "Status updated successfully",
            result: updatedApplication,
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
        });
    }
};
