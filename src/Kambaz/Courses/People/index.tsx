import { useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import Table from "./Table";
import Details from "./Details";
import * as client from "../client";

export default function People() {
    const [users, setUsers] = useState<any[]>([]);
    const { cid } = useParams();

    const fetchUsers = async () => {
        if (!cid) return;
        try {
            const courseUsers = await client.findUsersForCourse(cid);
            setUsers(courseUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [cid]);

    return (
        <Routes>
            <Route path="/" element={<Table users={users} />} />
            <Route path="/:uid" element={<Details />} />
        </Routes>
    );
} 