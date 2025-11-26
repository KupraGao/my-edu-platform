// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Edu Platform. All rights reserved.
      </p>
    </footer>
  );
}
