import MemeGeneratorHeader from "../../components/MemeGeneratorHeader/MemeGeneratorHeader";
import Meme from "../../components/Meme/Meme";
import "./memeGenerator.css";

export default function MemeGenerator() {
  return (
    <section className="memeGenerator-container">
      <MemeGeneratorHeader />
      <Meme />
    </section>
  );
}
