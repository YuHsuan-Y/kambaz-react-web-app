import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState, useEffect } from "react";
import { setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as courseClient from "../../Courses/client";
import * as moduleClient from "./client";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { modules } = useSelector((state: any) => state.modulesReducer);
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

    useEffect(() => {
       fetchModules();
    }, [cid]);

    const handleAddModule = async () => {
        try {
            setLoading(true);
            //await courseClient.createModuleForCourse(courseId, { name: moduleName });
            const newModule = { name: moduleName, course: cid };
            await moduleClient.createModule(cid as string, newModule);
            await fetchModules();
            setModuleName("");
        } catch (error) {
            console.error("Error adding module:", error);
            setError("Failed to add module. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteModule = async (moduleId: string) => {
        try {
            setLoading(true);
            await moduleClient.deleteModule(moduleId);
            await fetchModules();
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
            await moduleClient.updateModule(module);
            //await courseClient.updateModule(cid as string, module._id, module);
            await fetchModules();
        } catch (error) {
            console.error("Error updating module:", error);
            setError("Failed to update module. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="wd-modules">
            <ModulesControls 
                setModuleName={setModuleName} 
                moduleName={moduleName} 
                addModule={handleAddModule}
            /> 
            <br /><br /><br /><br/>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <ul id="wd-modules" className="list-group rounded-0">
                    {/*.filter((module: any) => module.course === cid)*/}
                    {modules.map((module: any) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing ? (
                                    <span>{module.name}</span>
                                ) : (
                                    <input className="form-control w-50 d-inline-block"value={module.name}
                                        onChange={(e) => {
                                            const updatedModule = {...module, name: e.target.value};
                                            // handleUpdateModule(updatedModule);
                                            dispatch(setModules(modules.map((m: any) => 
                                                m._id === module._id ? updatedModule : m
                                            )));
                                        }}
                                        onKeyDown={(e) => {
                                            if(e.key === "Enter") {
                                                handleUpdateModule({...module, editing: false});
                                            }
                                        }}
                                    />
                                )}
                                
                                <ModuleControlButtons moduleId={module._id}
                                    deleteModule={handleDeleteModule}
                                    updateModule={(moduleId) => {
                                        const moduleToEdit = modules.find((m: any) => m._id === moduleId);
                                        if (moduleToEdit) {
                                            dispatch(setModules(modules.map((m: any) => 
                                                m._id === moduleId ? {...m, editing: true} : m
                                            )));
                                        }
                                    }}
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

