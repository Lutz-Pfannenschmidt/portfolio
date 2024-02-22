/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    theme: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Ubuntu',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#a371ef",
          "secondary": "#dddbda",
          "accent": "#ee5c2f",
          "neutral": "#272525",
          "base-100": "#ebeaea",
        },
        dark: {
          "primary": "#431090",
          "secondary": "#252322",
          "accent": "#d13d11",
          "neutral": "#272525",
          "base-100": "#151414",
        },
      },
    ],
  },
}
