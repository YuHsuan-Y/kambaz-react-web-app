import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState, useEffect } from "react";
import { setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as courseClient from "../../Courses/client";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { modules = [] } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    const fetchModules = async() => {
        try {
            setLoading(true);
            const modules = await courseClient.findModulesForCourse(cid as string);
            dispatch(setModules(modules));
        } catch (error) {
            console.error("Error fetching modules:", error);
            setError("Failed to load modules. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddModule = async () => {
        if (!moduleName.trim() || !cid) return;
        
        try {
            setLoading(true);
            await courseClient.createModuleForCourse(cid, { name: moduleName });
            await fetchModules(); // Refresh the modules list
            setModuleName("");
        } catch (error) {
            console.error("Error adding module:", error);
            setError("Failed to add module. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteModule = async (moduleId: string) => {
        try {
            setLoading(true);
            await courseClient.deleteModule(cid as string, moduleId);
            await fetchModules(); // Refresh the modules list
        } catch (error) {
            console.error("Error deleting module:", error);
            setError("Failed to delete module. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateModule = async (module: any) => {
        try {
            setLoading(true);
            await courseClient.updateModule(cid as string, module._id, module);
            await fetchModules(); // Refresh the modules list
        } catch (error) {
            console.error("Error updating module:", error);
            setError("Failed to update module. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (cid) {
            fetchModules();
        }
    }, [cid]);

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="wd-modules">
            <ModulesControls 
                setModuleName={setModuleName} 
                moduleName={moduleName} 
                addModule={handleAddModule}
                disabled={loading}
            /> 
            <br /><br /><br /><br/>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        .filter((module: any) => module.course === cid)
                        .map((module: any) => (
                            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3" /> {module.name} 
                                    {!module.editing && module.name}
                                    {module.editing && (
                                        <input 
                                            className="form-control w-50 d-inline-block"
                                            onChange={(e) => handleUpdateModule({...module, name: e.target.value})}
                                            onKeyDown={(e) => {
                                                if(e.key === "Enter") {
                                                    handleUpdateModule({...module, editing: false});
                                                }
                                            }}
                                            defaultValue={module.name}
                                        />
                                    )}
                                    <ModuleControlButtons 
                                        moduleId={module._id}
                                        deleteModule={handleDeleteModule}
                                        editModule={(moduleId) => handleUpdateModule({...module, editing: true})}
                                    />
                                </div>

                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

