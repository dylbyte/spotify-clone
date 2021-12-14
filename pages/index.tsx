import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="blue"
      subtitle="Profile"
      title="Dylan Baker"
      description="13 public playlists"
      roundImage
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <div>Homepage</div>
    </GradientLayout>
  );
};

export default Home;
