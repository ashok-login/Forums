using Forums.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Data
{
    public class ModuleRepository : IModuleRepository
    {
        private readonly ForumsDataContext _context;

        public ModuleRepository(ForumsDataContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public void Add(Module module)
        {
            _context.Add(module);
        }

        public void Delete(Module module) 
        {
            _context.Remove(module);
        }

        public async Task<Module> Get(int id)
        {
            var tag = await _context.Modules.FirstOrDefaultAsync(x => x.Id == id);
            return tag;
        }

        public async Task<IEnumerable<Module>> GetAll()
        {
            return await _context.Modules.ToListAsync();
        }
    }
}
