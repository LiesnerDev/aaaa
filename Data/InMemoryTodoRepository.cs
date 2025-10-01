using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList.Interfaces;
using TodoList.Models;

namespace TodoList.Data
{
    public class InMemoryTodoRepository : ITodoRepository
    {
        private readonly List<TodoItem> _todos = new List<TodoItem>();

        public async Task<IEnumerable<TodoItem>> GetAllAsync()
        {
            return await Task.FromResult(_todos);
        }

        public async Task<TodoItem> GetByIdAsync(Guid id)
        {
            var item = _todos.FirstOrDefault(x => x.Id == id);
            return await Task.FromResult(item);
        }

        public async Task CreateAsync(TodoItem item)
        {
            item.Id = Guid.NewGuid();
            _todos.Add(item);
            await Task.CompletedTask;
        }

        public async Task UpdateAsync(TodoItem item)
        {
            var index = _todos.FindIndex(x => x.Id == item.Id);
            if (index != -1)
            {
                _todos[index] = item;
            }
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(Guid id)
        {
            var item = _todos.FirstOrDefault(x => x.Id == id);
            if (item != null)
            {
                _todos.Remove(item);
            }
            await Task.CompletedTask;
        }
    }
}
