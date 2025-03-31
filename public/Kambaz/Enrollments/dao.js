import Database from "../Database/index.js";
import {v4 as uuidv4} from "uuid";

//a course is created, implement this func for user to enroll a course
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    // Check if enrollment already exists
    const existingEnrollment = enrollments.find(
        e => e.user === userId && e.course === courseId
    );
    if (existingEnrollment) {
        return existingEnrollment;
    }
    // Create new enrollment
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    Database.enrollments.push(newEnrollment);
    return newEnrollment;
}

export function findEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function deleteEnrollment(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
    );
    return { status: "ok" };
}


