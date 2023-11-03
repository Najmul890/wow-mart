/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
              },
        },
        
        extend: {
            screens: {
                '2xs':'350px',
                'xs':'400px',
                '2sm':'540px',
                '2md':'900px',
                '3xl':'1600px',
                '4xl':'1800px',
                '5xl':'2000px',
              },
              colors: {
                primary:"navy",
                secondary:"red",
                tertiary: "#fff"
            },
        },
    },
    daisyui: {
        themes: ["light"],
    },
    plugins: [require("daisyui")],
};
//https://tailwindcss.com/docs/screens#adding-larger-breakpoints