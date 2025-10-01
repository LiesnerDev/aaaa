using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoList.Models;

namespace TodoList.Interfaces
{
    public interface ITodoRepository
    {
        Task<IEnumerable<TodoItem>> GetAllAsync();
        Task<TodoItem> GetByIdAsync(Guid id);
        Task CreateAsync(TodoItem item);
        Task UpdateAsync(TodoItem item);
        Task DeleteAsync(Guid id);
    }
}
