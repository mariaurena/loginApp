import { Navigate, Route, Routes } from "react-router"
import { GalleryPage } from "../pages/GalleryPage"


export const GalleryRoutes = () => {
  return (
    <Routes>
        <Route path = "/" element = { <GalleryPage />} />

        <Route path = "/*" element = { <Navigate to = "/" />} />
    </Routes>
  )
}
