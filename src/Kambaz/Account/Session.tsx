import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {

const [pending, setPending] = useState(true);
const dispatch = useDispatch();
const fetchProfile = async ()=> {
    try {
        const currentUser = await client.profile();
        dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
        console.error('Failed to fetch profile:', err);
        if (err.response) {
            console.error('Server response:', err.response.data);
        }
    }
    setPending(false);
};
useEffect(()=> {
    fetchProfile();
}, []);

if (!pending) {
    return children;
}
}
