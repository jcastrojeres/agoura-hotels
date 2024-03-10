import "@/assets/styles/globals.css";

export const metadata = {
  title: "Agoura Hotels | Find the perfect hotel",
  description: "Find your dream rental property",
  keywords:
    "rental, find rentals, find properties,hotels, find hotels, hotels near me",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
