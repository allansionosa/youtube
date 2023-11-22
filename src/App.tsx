import { CategoryPills } from "./components/CategoryPills";
import { PageHeader } from "./layouts/PageHeader";
import { categories, videos } from "../home";
import { useState } from "react";
import { VideoGridItem } from "./components/VideoGridItem";
import SideBar from "./layouts/SideBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,_1fr] flex-grow overflow-auto">
        <SideBar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="grid grid-cols-auto-fill grid-cols-minmax-300px-1fr gap-4">
            {videos.map((video) => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
