import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));
        } catch (err: any) {
            // If we get a 401, it means the user is not signed in
            // This is expected when the app first loads
            dispatch(setCurrentUser(null));
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    if (pending) {
        return null; // or a loading spinner
    }

    return children;
}
