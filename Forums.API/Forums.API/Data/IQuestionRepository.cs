using Forums.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Data
{
    public interface IQuestionRepository
    {
        void Add(Question question);
        void Delete(Question question);
        Task<Question> Get(int id);
        Task<IEnumerable<Question>> GetAll();
    }
}
