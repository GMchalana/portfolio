
import { projectsData } from '../data/projectsData'

function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a 
                href={project.githubLink} 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                className="text-green-500 hover:underline"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects