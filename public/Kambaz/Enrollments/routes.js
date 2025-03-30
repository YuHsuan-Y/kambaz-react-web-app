import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
    const enrollUserInCourse = async (req, res) => {
        const { userId, courseId } = req.body;
        const enrollment = await enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
    };

    const unenrollUserFromCourse = async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await enrollmentsDao.deleteEnrollment(userId, courseId);
        res.json(status);
    };

    const getEnrollmentsForUser = async (req, res) => {
        const { userId } = req.params;
        const enrollments = await enrollmentsDao.findEnrollmentsForUser(userId);
        res.json(enrollments);
    };

    app.post("/api/enrollments", enrollUserInCourse);
    app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
    app.get("/api/enrollments/:userId", getEnrollmentsForUser);
}
