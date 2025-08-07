import Navbar from "./components/Navbar.jsx"
import ProductHighlight from "./components/ProductHighlight.jsx";
import ProductCategory from "./components/ProductCategory.jsx";
import Footer from "./components/Footer.jsx";

// 🛠️ Todo 1 / Step 3: ให้ Import ตัว Component Navbar เพื่อจะนำไป Render ลงใน Component App ด้านล่าง

//     ==== ตัวอย่าง ====

//     import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <>
      <Navbar />
      <ProductHighlight />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default App;

// mission 0
// npm = node package manager เป็นคำสั่งเพื่อจัดการแพ็กเกจของ JS
// vite = เครื่องมือพัฒนา Web App 
// package.json = ไฟล์สำหรับบอกรายละเอียด และสิ่งที่ใช้ในโปรเจค
// node_modules = โฟลเดอร์เก็บแพ็กเกจที่ติดตั้งไว้สำหรับโปรเจค
// .gitignore = การประกาศเว้นไฟล์หรือโฟลเดอร์ที่จะเข้า Repo
// App.jsx = Component หลักของ React