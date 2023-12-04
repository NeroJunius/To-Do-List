export interface ITaskList {
    id?: number
    name?: string
    status?: boolean
    description?: string
    category?: string
}

export interface ITask {
    _id: any
    name: string
    status: boolean
    description: string
    category?: ICategory
}