async function fetchProjects() {
  const url = 'https://api.github.com/users/aidanho1188/repos'

  try {
    const response = await fetch(url)
    function toTitleCase(str) {
      return str
        .split('-') // Split the string into words by -
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(' ') // Join the words back together with spaces
    }

    function isRecentProjects(pushed_at) {
      if (new Date(pushed_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)) {
        return true
      } else {
        return false
      }
    }

    let projectsData = await response.json()
    projectsData = projectsData
      .filter((repo) => repo.description !== null)
      .map((repo) => ({
        id: repo.id,
        title: toTitleCase(repo.name),
        description: repo.description,
        duration: 'Unknown',
        link: repo.html_url,
        recentProjects: isRecentProjects(repo.pushed_at),
        pushedAt: new Date(repo.pushed_at).toLocaleDateString(),
        createdAt: new Date(repo.created_at).toLocaleDateString(),
        lastCommitted: new Date(repo.pushed_at),
      }))
      .sort((a, b) => b.lastCommitted - a.lastCommitted)
    return projectsData
    console.log('Current Projects:', otherProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
}
export default fetchProjects
