using IBusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReflectionController : ControllerBase
    {
        private readonly IReflectionLogic _reflectionLogic;

        public ReflectionController(IReflectionLogic reflectionLogic)
        {
            _reflectionLogic = reflectionLogic;
        }

        [HttpGet("importers")]
        public IActionResult ImportersDllNames()
        {
            var dllNames = _reflectionLogic.GetImporterDlls();
            return Ok(dllNames);
        }
    }
}
