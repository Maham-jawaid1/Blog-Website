
import Header from "@/components/header";
import Footer from "@/components/footer";
// import Responsive from "@/responsive/page";
export default function Home() {
  return (
    <div>
      {/* <Responsive /> */}
    <div className="parentContainer">
      <div className="childContainer">
        <div className="imageContainer"><img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww" alt=""/></div>
    <strong> <h1 className="title">Programming Languages</h1></strong>
        <p className="description">
        A programming language is a set of instructions written by a programmer to deliver instructions to the computer to perform and accomplish a task....{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>

      <div className="childContainer ">
        <div className="imageContainer"><img src="https://img.freepik.com/free-photo/programming-background-concept_23-2150170137.jpg" alt="" /></div>
       <strong> <h1 className="title">Technology</h1></strong>
        <p className="description">
        Technology is the use of scientific knowledge for practical purposes or applications, whether in industry or in our everyday lives. It includes ....{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>
      <div className="childContainer ">
        <div className="imageContainer"><img src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg" alt="" /></div>
       <strong> <h1 className="title">Artificial Intelligence</h1></strong>
        <p className="description">
        Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand....{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>
      <div className="childContainer">
        <div className="imageContainer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUWrYcyY6byzsX3AfL9LbvtpvjPW2KZ5fUQ&s" alt="" /></div>
       <strong><h1 className="title">Cloud Computing</h1></strong>
        <p className="description">
        Cloud computing simply refers to the delivery of computing services over the internet, including storage, databases, software, and analytics....{" "}
        </p>
      <button className="readMore">Read More</button>
      </div>
      <div className="childContainer">
        <div className="imageContainer"><img src="https://freedesignfile.com/upload/2017/03/Master-the-advanced-technology-business-woman-Stock-Photo-19.jpg" alt="" /></div>
        <strong><h1 className="title">Cyber Security</h1></strong>
        <p className="description">
        Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or....{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>
      <div className="childContainer">
        <div className="imageContainer"><img src="https://www.humanresourcing.co.uk/wp-content/uploads/2023/08/connected-technology.jpg" alt="" /></div>
        <strong><h1 className="title">Blockchain</h1></strong>
        <p className="description">
        Blockchain is a decentralized digital ledger that securely stores records across a network of computers in a way that is transparent, immutable....{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>
    </div>
    </div>
  );
}