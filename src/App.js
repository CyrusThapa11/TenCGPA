import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import StudentDashboard from "./students/StudentDashboard";
import SupervisorDashboard from "./supervisor/SupervisorDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import Navbar from "./components/nav/Navbar";
import AllNotes from "./components/notes/AllNotes";
import AllTests from "./components/testpapers/AllTests";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import CreateNotes from "./components/notes/CreateNotes";
import SingleNote from "./components/notes/SingleNote";
import UpdateNotes from "./components/notes/UpdateNotes";
import AllStudents from "./admin/AllStudents";
import AllNotesAdmin from "./admin/AllNotesAdmin";
import AllTestpapers from "./admin/AllTestpapers";
import CreateTestpaper from "./components/testpapers/CreateTestpaper";
import SingleTestpaper from "./components/testpapers/SingleTestpaper";
import UpdateTestpaper from "./components/testpapers/UpdateTestpaper";
import Login from "./pages/Login";
import StudentNotes from "./students/StudentNotes";
import StudentSavedNotes from "./students/StudentSavedNotes";
// require("dotenv").config();

function App() {
  const state = useSelector((state) => state.userReducer);
  return (
    <div className="App">
      {/* <Toast */}
      {state?.loading || state?.user?.loading ? (
        <>
          <h1 className="text-2xl">Loading</h1>
        </>
      ) : (
        <></>
      )}

      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/supervisor/dashboard" element={<SupervisorDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* create-notes for students */}

        <Route path="/create-note" element={<CreateNotes />} />
        <Route path="/all-notes" element={<AllNotes />} />
        <Route path="/all-testpapers" element={<AllTests />} />
        <Route path="/create-testpaper" element={<CreateTestpaper />} />

        {/* for admin */}

        <Route path="/notes" element={<AllNotesAdmin />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/testpapers" element={<AllTestpapers />} />
        {/* notes */}

        <Route path="/note/:id" element={<SingleNote />} />
        <Route path="/note/edit/:id" element={<UpdateNotes />} />
        {/* testpapers */}

        <Route path="/testpapers/:id" element={<SingleTestpaper />} />
        <Route path="/testpapers/edit/:id" element={<UpdateTestpaper />} />
        {/*  */}
        {/* student dashborad */}
        <Route path="/student/dashboard/" element={<StudentDashboard />} />
        <Route
          path="/student/dashboard/my-testpapers"
          element={<StudentNotes />}
        />
        <Route
          path="/student/dashboard/saved"
          element={<StudentSavedNotes />}
        />
        <Route path="/student/dashboard/my-notes" element={<StudentNotes />} />
        {/* student/dasboard/my-testpapers */}
      </Routes>
    </div>
  );
}

export default App;
