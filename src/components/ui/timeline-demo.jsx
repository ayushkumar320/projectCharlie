import React from 'react';
import Timeline3D from '@/components/ui/3d-interactive-timeline.jsx';

const TimelineDemo = () => {
  const timelineEvents = [
    {
      id: '1',
      date: '2019',
      title: 'CodeShack Foundation',
      description: 'CodeShack was established as the premier technical club of Sir MVIT, bringing together passionate students interested in technology, innovation, and open source development. The club was founded with a vision to create a collaborative environment for technical learning and growth.',
      icon: <span className="text-white font-bold text-lg">CS</span>,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Foundation',
      color: 'amber',
      link: {
        url: '#',
        text: 'Learn More About Our History',
      },
    },
    {
      id: '2',
      date: '2020',
      title: 'GLUG Integration',
      description: 'CodeShack successfully integrated the GNU/Linux Users Group (GLUG), expanding our reach into the open source community. This integration brought together Linux enthusiasts and developers, creating a stronger foundation for technical collaboration and knowledge sharing.',
      icon: <span className="text-white font-bold text-lg">GL</span>,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Open Source',
      color: 'emerald',
    },
    {
      id: '3',
      date: '2021',
      title: 'TechHub Launch',
      description: 'Launched TechHub as a specialized division focusing on cutting-edge technologies, AI/ML, and emerging tech trends. TechHub quickly became a hub for innovation, hosting workshops, hackathons, and tech talks that attracted students from across the campus.',
      icon: <span className="text-white font-bold text-lg">TH</span>,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Innovation',
      color: 'blue',
    },
    {
      id: '4',
      date: '2022',
      title: 'First Major Hackathon',
      description: 'Organized our first major hackathon with over 200 participants from various colleges. The event featured industry mentors, cutting-edge problem statements, and substantial prizes. This marked CodeShack\'s emergence as a leading technical community in the region.',
      icon: <span className="text-white font-bold text-lg">H</span>,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Events',
      color: 'rose',
      link: {
        url: '#',
        text: 'View Event Gallery',
      },
    },
    {
      id: '5',
      date: '2023',
      title: 'Industry Partnerships',
      description: 'Established strategic partnerships with leading tech companies and startups, providing our members with internship opportunities, mentorship programs, and real-world project experience. These partnerships have significantly enhanced our members\' career prospects.',
      icon: <span className="text-white font-bold text-lg">P</span>,
      image: 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
      category: 'Partnerships',
      color: 'purple',
    },
    {
      id: '6',
      date: '2024',
      title: 'AI & ML Focus',
      description: 'Launched specialized AI/ML workshops and research initiatives, positioning CodeShack at the forefront of artificial intelligence education. Our members have developed innovative projects in machine learning, deep learning, and data science, gaining recognition in national competitions.',
      icon: <span className="text-white font-bold text-lg">AI</span>,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'Research',
      color: 'indigo',
    },
  ];

  return (
    <div className="min-h-screen">
      <Timeline3D 
        events={timelineEvents}
        primaryColor="bg-[#BD9f67]"
        secondaryColor="bg-violet-500"
        accentColor="bg-emerald-500"
        backgroundColor="bg-transparent"
        showImages={true}
      />
    </div>
  );
};

export default TimelineDemo;
