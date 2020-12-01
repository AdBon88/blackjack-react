using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using blackjack_react.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace blackjack_react.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {
        public IEnumerable<ToDoItem> toDoList = CreateDefaultToDoList();

        private readonly ILogger<ToDoListController> _logger;

        public ToDoListController(ILogger<ToDoListController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ToDoItem> Get()
        {
            return toDoList.ToArray();
        }

        private static IEnumerable<ToDoItem> CreateDefaultToDoList()
        {
            return new List<ToDoItem>{
                new ToDoItem("Collect underpants"),
                new ToDoItem("?"),
                new ToDoItem("Profit"),
            };
        }
    }
}
