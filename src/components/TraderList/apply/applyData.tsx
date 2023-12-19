import ApplicationStatus from "./applicationStatus/ApplicationStatus";
import PrimaryDetails from "./primaryDetails/PrimaryDetails";
import TaskVerification from "./taskVerification/TaskVerification";
import TrackApplication from "./trackApplication/TrackApplication";

let id = 0;
export const applyTab = [
    {
        id: id++,
        text: 'Primary Details',
        state:'active',
        component: <PrimaryDetails />
    },
    {
        id: id++,
        text: 'Task Verification',
        state: '',
        component: <TaskVerification />
    },
    {
        id: id++,
        text: 'Application Status',
        state: '',
        component: <ApplicationStatus />
    },
    {
        id: id++,
        text: 'Track Application',
        state: '',
        component: <TrackApplication />
    },
]