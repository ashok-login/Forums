using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Forums.API.Data;
using Forums.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Forums.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        private readonly IModuleRepository _repo;
        private readonly IMapper _mapper;

        public ModulesController(IModuleRepository repo, IMapper mapper)
        {
            _repo = repo ?? throw new ArgumentNullException(nameof(repo));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllModules()
        {
            var modules = await _repo.GetAll();
            var modulesToReturn = _mapper.Map<IEnumerable<ModulesForListDto>>(modules);
            return Ok(modulesToReturn);
        }

        public async Task<IActionResult> GetModule(int id)
        {
            return Ok(await _repo.Get(id));
        }
    }
}
