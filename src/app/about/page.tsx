import React from 'react';
import Layout from '@/components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6 text-blue-400">About Me</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Background</h2>
          <p className="mb-4">
            My journey began with a deep passion for political science, which led me to pursue both undergraduate and graduate degrees in the field. During my master&apos;s program, I discovered the fascinating world of quantitative political science, which introduced me to traditional machine learning techniques.
          </p>
          <p className="mb-4">
            This exposure ignited a new passion within me: programming. I found myself particularly drawn to Natural Language Processing (NLP), which beautifully merged my interests in political science and technology.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Professional Experience</h2>
          <p className="mb-4">
            My newfound love for programming and NLP led me to a data scientist role at a startup specializing in NLP processing. This position allowed me to wear multiple hats, gaining experience in backend development, frontend work, and cloud technologies.
          </p>
          <p className="mb-4">
            Now, having completed my contract role, I&apos;m excited to pursue new opportunities that allow me to write code and solve complex problems. While I have a special affinity for machine learning, I&apos;m also passionate about cloud technologies and backend development.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Projects and Interests</h2>
          <p className="mb-4">
            I love challenging myself with diverse projects that push my boundaries as a developer. Some of my notable projects include:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Developing a chess engine</li>
            <li>Creating a full-stack website for gamifying binary to decimal conversion practice</li>
            <li>Currently working on a chatroom application with Go and WebSockets</li>
          </ul>
          <p className="mb-4">
            This website serves as a platform for me to document my journey through various side projects and share my enthusiasm for programming. Through my blog posts, I hope to provide insights into my development process and the lessons I learn along the way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Beyond Coding</h2>
          <p>
            When I&apos;m not immersed in code, you can find me engaged in a variety of activities. I&apos;m an avid chess player, always looking to improve my game. I also enjoy diving into thought-provoking philosophy books or getting lost in captivating fantasy worlds through literature. To stay active, I love hitting the basketball court for a good game or practice session.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
