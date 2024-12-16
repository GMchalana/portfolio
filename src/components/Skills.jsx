function Skills() {
    const skills = [
      'React', 'JavaScript', 'Tailwind CSS', 
      'Node.js', 'MongoDB', 'Git'
    ]
  
    return (
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span 
              key={skill} 
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }
  
  export default Skills