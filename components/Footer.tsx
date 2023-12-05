export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} Rajeev Shrestha. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this portfolio website:</span> built with React &
        Next.js, TypeScript, Tailwind CSS, Framer Motion Netlify hosting.
      </p>
    </footer>
  )
}
