export const TASKS = [
  {
    id: 1,
    label: "Update Tailwind UI version to 2.0",
    project: 0,
    completed: false,
    pinned: true,
    assignees: [
      {
        id: 1,
        name: "Goutham Subramanyam",
        profile_image_path: ""
      }
    ],
    dueDate: {
      date: '2021-04-11T21:35:35Z',
      time: null,
      reminder: null,
    },
    comments: 2,
    labels: [
      {
        id: 1,
        name: 'Urgent'
      }
    ]
  },
  {
    id: 2,
    label: "Call with Neeraj, Vinay & Edwin regarding TinyBinary",
    project: 0,
    completed: false,
    pinned: false,
    assignees: [],
    dueDate: null,
    comments: null,
    labels: [],
  },
  {
    id: 3,
    label: "Finish NeetoTodo Wireframes",
    project: 0,
    completed: true,
    pinned: false,
    assignees: [],
    dueDate: null,
    comments: null,
    labels: [],
  },
  {
    id: 4,
    label: "Call with Karthik regarding NeetoForm",
    project: 0,
    completed: true,
    pinned: false,
    assignees: [],
    dueDate: null,
    comments: null,
    labels: [],
  },
]

export const SAMPLE_PROJECTS = [
  {
    id: 1,
    label: 'General',
  },
  {
    id: 2,
    label: 'BB LLC',
  },
  {
    id: 3,
    label: 'Constellation',
  }
]

export const SAMPLE_LABELS = [
  {
    id: 1,
    name: 'Urgent',
  },
  {
    id: 2,
    name: 'Procastinated'
  },
  {
    id: 3,
    name: 'Backlog'
  }
]

export const ADD_TASK_STATES = {
  OPEN: 'Open',
  CLOSED: 'Closed'
}