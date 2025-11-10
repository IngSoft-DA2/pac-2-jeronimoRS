using System.Reflection;
using IBusinessLogic;
using IImporter;

namespace BusinessLogic;

public class ReflectionLogic : IReflectionLogic
{
    public List<string> GetImporterDlls()
    {
        var reflectionPath = "./reflection"; 
        string[] filePaths = Directory.GetFiles(reflectionPath); 
        List<string> validDlls = new List<string>(); 

        foreach (string file in filePaths) 
        {
            if (FileIsDll(file))
            {
                FileInfo dllFile = new FileInfo(file);
                Assembly assembly;

                try
                {
                    assembly = Assembly.LoadFile(dllFile.FullName);
                }
                catch
                {
                    continue;
                }
                    
                bool hasImporter = assembly.GetTypes().Any(type =>
                    ImplementsRequiredInterface(type)
                );

                if (hasImporter)
                {
                    validDlls.Add(dllFile.Name);
                }
            }
        }

        return validDlls;
    }

    private bool FileIsDll(string file)
    {
        return file.EndsWith(".dll", StringComparison.OrdinalIgnoreCase);
    }

    private bool ImplementsRequiredInterface(Type type)
    {
        return typeof(ImporterInterface).IsAssignableFrom(type)
               && !type.IsInterface
               && type.IsPublic
               && !type.IsAbstract;
    }
}