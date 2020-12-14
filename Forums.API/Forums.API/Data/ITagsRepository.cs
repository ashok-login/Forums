using Forums.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Data
{
    public interface ITagsRepository
    {
        void Add(Tag tag);
        void Delete(Tag tag);
        Task<Tag> Get(int id);
        Task<IEnumerable<Tag>> GetAll();
    }
}
