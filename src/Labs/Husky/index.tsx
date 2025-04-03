//const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
import { useNavigate} from 'react-router-dom';

import "./CreatePost/CreatePost.css";

export default function Husky(){
    const navigate = useNavigate();
    
    return (
        <div style={{ 
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh'
        }}>
            <h2 style={{ marginBottom: '30px' }}>Husky</h2>
            
            <div className="create-post-container" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '400px',
                minHeight: 'auto',
                padding: '2rem'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Create a Post</h1>
                <button 
                    className="submit-btn"
                    style={{ 
                        width: '100%',
                        padding: '12px 20px', 
                        fontSize: '16px'
                    }} 
                    onClick={() => navigate('/Husky/create-post')}
                >
                    Add Post
                </button>
            </div>
            
            <div style={{ 
                display: 'flex',
                marginTop: '20px',
                gap: '15px'
            }}>
                <button 
                    style={{ 
                        padding: '12px 20px', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }} 
                    onClick={() => navigate('/Husky/chat')}
                >
                    Chat
                </button>
                <button 
                    style={{ 
                        padding: '12px 20px', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }} 
                    onClick={() => navigate('/Husky/post-detail')}
                >
                    Detail
                </button>
            </div>
        </div>
    );
}