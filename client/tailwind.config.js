export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensures Tailwind scans all files
    theme: {
        extend: {
            colors: {
                primary: "#F3F9FA",
                secondary: "#000000",
                border: "#CCCCCC",
                hover: "#E0E0E0",
                btn: "#FF5733",
                lightGray: "#D3D3D3",
                modalBg: "rgba(0, 0, 0, 0.8)",
                modalShadow: "rgba(0, 0, 0, 0.2)",
                toggleBtn: "#2196F3",
            },
        },
    },
    plugins: [],
};