using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forums.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Forums.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TagsController : ControllerBase
    {
        private readonly ITagsRepository _repo;

        public TagsController(ITagsRepository repo)
        {
            _repo = repo ?? throw new ArgumentNullException(nameof(repo));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTags()
        {
            return Ok(await _repo.GetAll());
        }

        public async Task<IActionResult> GetTag(int id)
        {
            return Ok(await _repo.Get(id));
        }
    }
}
