using Forums.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Data
{
    public interface IModuleRepository
    {
        void Add(Module module);
        void Delete(Module module);
        Task<Module> Get(int id);
        Task<IEnumerable<Module>> GetAll();
    }
}
