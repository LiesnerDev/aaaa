using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoList.Interfaces;
using TodoList.Models;

namespace TodoList.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepository _repository;

        public TodoController(ITodoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> GetAll()
        {
            var todos = await _repository.GetAllAsync();
            return Ok(todos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetById(Guid id)
        {
            var todo = await _repository.GetByIdAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            return Ok(todo);
        }

        [HttpPost]
        public async Task<ActionResult<TodoItem>> Create([FromBody] TodoItem todo)
        {
            if (todo == null || string.IsNullOrEmpty(todo.Title))
            {
                return BadRequest("Invalid todo item.");
            }
            await _repository.CreateAsync(todo);
            return CreatedAtAction(nameof(GetById), new { id = todo.Id }, todo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] TodoItem todo)
        {
            if (todo == null || id != todo.Id)
            {
                return BadRequest();
            }
            var existingTodo = await _repository.GetByIdAsync(id);
            if (existingTodo == null)
            {
                return NotFound();
            }
            await _repository.UpdateAsync(todo);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var existingTodo = await _repository.GetByIdAsync(id);
            if (existingTodo == null)
            {
                return NotFound();
            }
            await _repository.DeleteAsync(id);
            return NoContent();
        }
    }
}
