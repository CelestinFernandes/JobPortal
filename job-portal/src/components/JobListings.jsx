import { MapPin, Clock } from "lucide-react"

export default function JobListings({ isDark }) {
  const jobs = [
    { title: "Senior Product Designer",
      company: "Dropbox",
      location: "San Francisco, CA",
      type: "Full Time",
      salary: "$80k-120k",
      tags: ["Design", "UI/UX", "Figma"],
      featured: true
    },
    { title: "Project Manager",
      company: "Google Inc",
      location: "New York, NY",
      type: "Part Time",
      salary: "$60k-80k",
      tags: ["Management", "Agile", "Scrum"],
    },
    { title: "Full Stack Developer",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full Time",
      salary: "$90k-130k",
      tags: ["React", "Node.js", "MongoDB"],
    },
    { title: "Front-end Developer",
      company: "Amazon",
      location: "Austin, TX",
      type: "Contract",
      salary: "$70k-100k",
      tags: ["JavaScript", "React", "CSS"],
    },
    { title: "React JS Developer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full Time",
      salary: "$85k-125k",
      tags: ["React", "JavaScript", "Redux"],
    },
    { title: "Python Developer",
      company: "Microsoft",
      location: "Redmond, WA",
      type: "Full Time",
      salary: "$80k-115k",
      tags: ["Python", "Django", "PostgreSQL"],
    },
  ]

  return (
    <section className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Latest and <span className="text-purple-600">Top Job</span> Openings</h2>
            <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}> Discover the latest job openings from top companies and start your career with us today!</p>
          </div>
          <button className={`hidden md:flex px-4 py-2 border rounded-lg transition-colors hover:bg-purple-50 hover:border-purple-600 ${isDark ? "border-gray-600 text-gray-300 hover:bg-purple-900" : "border-gray-300 text-gray-600"}`}>View All Jobs</button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className={`p-6 rounded-lg transition-all hover:shadow-lg hover:scale-105 ${job.featured ? "bg-purple-600 text-white" : isDark ? "bg-gray-700 hover:bg-purple-900" : "bg-white hover:bg-purple-50"}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${job.featured ? "bg-white/20" : isDark ? "bg-gray-600" : "bg-gray-100"}`}>
                    <span className="font-bold">{job.company[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className={`${job.featured ? "text-white/80" : isDark ? "text-gray-300" : "text-gray-600"}`}>{job.company}</p>
                  </div>
                </div>
                {job.featured && <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">Featured</span>}
              </div>

              <div className="flex items-center space-x-4 mb-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.type}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-2 py-1 rounded text-xs ${job.featured ? "bg-white/20" : isDark ? "bg-gray-600" : "bg-gray-100"}`}>{tag}
                  </span>))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{job.salary}</span>
                <button className={`px-4 py-2 rounded transition-colors ${job.featured ? "bg-white text-purple-600 hover:bg-gray-100" : "bg-purple-600 text-white hover:bg-purple-700"}`}>Apply Now</button>
              </div>
            </div>))}
        </div>
      </div>
    </section>
  )
}