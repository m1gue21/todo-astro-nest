const apiBaseUrl = 'http://localhost:3000/api/v1/tasks';

export async function fetchTasks() {
    try {
        let response = await fetch(apiBaseUrl);
        let data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return []; 
    }
}

export async function createTask(newTask) {
   
  
    try {
      const response = await fetch(apiBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask)
      });
  
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
  
      const task = await response.json();
      console.log('Task created:', task);
    } catch (error) {
      console.error('Error:', error);
    }
}

