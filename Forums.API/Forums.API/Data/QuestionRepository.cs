using Forums.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Data
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly ForumsDataContext _context;

        public QuestionRepository(ForumsDataContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public void Add(Question question)
        {
            _context.Add(question);
        }

        public void Delete(Question question)
        {
            _context.Remove(question);
        }

        public async Task<Question> Get(int id)
        {
            return await _context.Questions.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Question>> GetAll()
        {
            return await _context.Questions.ToListAsync();
        }
    }
}
