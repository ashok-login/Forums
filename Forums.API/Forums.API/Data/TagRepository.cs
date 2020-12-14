using Forums.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Data
{
    public class TagRepository : ITagsRepository
    {
        private readonly ForumsDataContext _context;

        public TagRepository(ForumsDataContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public void Add(Tag tag)
        {
            _context.Add(tag);
        }

        public void Delete(Tag tag) 
        {
            _context.Remove(tag);
        }

        public async Task<Tag> Get(int id)
        {
            var tag = await _context.Tags.FirstOrDefaultAsync(x => x.Id == id);
            return tag;
        }

        public async Task<IEnumerable<Tag>> GetAll()
        {
            return await _context.Tags.ToListAsync();
        }
    }
}
