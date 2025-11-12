// Test component to verify Tailwind classes
export default function Test() {
  return (
    <div className="bg-dark-primary text-text-primary p-4">
      <h1 className="text-neon-violet font-grotesk text-4xl">Test Neon Violet</h1>
      <h2 className="text-neon-cyan font-poppins text-2xl">Test Neon Cyan</h2>
      <p className="text-text-secondary font-inter">Test text secondary</p>
      <div className="glass p-4 mt-4">
        <p>Test glassmorphism</p>
      </div>
      <div className="gradient-text text-4xl font-bold">Test Gradient</div>
    </div>
  );
}
