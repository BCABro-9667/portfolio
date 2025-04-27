import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCheckCircle, FiSmile } from 'react-icons/fi';
import '../styles/StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      title: "Years Experience",
      value: 1,
      icon: <FiBriefcase className="stat-icon" />,
      color: "stat-icon-container blue"
    },
    {
      id: 2,
      title: "Projects Completed",
      value: 20,
      icon: <FiCheckCircle className="stat-icon" />,
      color: "stat-icon-container purple"
    },
    {
      id: 3,
      title: "Happy Clients",
      value: 3,
      icon: <FiSmile className="stat-icon" />,
      color: "stat-icon-container green"
    },
    {
      id: 4,
      title: "Awards Won",
      value: 4,
      icon: <FiAward className="stat-icon" />,
      color: "stat-icon-container amber"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="stats-header"
        >
          <h2 className="stats-title">
            My Professional Journey
          </h2>
          <p className="stats-subtitle">
            Years of dedication, quality work, and satisfied clients
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="stats-grid"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="stat-card"
            >
              <div className={stat.color}>
                {stat.icon}
              </div>
              <h3 className="stat-value">
                <span className="stat-value-gradient">
                  {stat.value}+
                </span>
              </h3>
              <p className="stat-label">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;