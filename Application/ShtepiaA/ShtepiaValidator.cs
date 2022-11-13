using Domain;
using FluentValidation;

namespace Application.ShtepiaA
{
    public class ShtepiaValidator : AbstractValidator<Shtepia>
    {
        public ShtepiaValidator()
        {
            // RuleFor(x => x.files).NotEmpty();
            RuleFor(x => x.Lokacioni).NotEmpty();
            RuleFor(x => x.Cmimi).NotEmpty();
            RuleFor(x => x.NrDhomave).NotEmpty();
            RuleFor(x => x.NrBanjove).NotEmpty();
            RuleFor(x => x.Siperfaqja).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
            RuleFor(x => x.LagjjaId).NotEmpty();
            // RuleFor(x => x.QytetiId).NotEmpty();
            RuleFor(x => x.LlojiShtepiseId).NotEmpty();
            RuleFor(x => x.GjendjaShtepiseId).NotEmpty();
            RuleFor(x => x.PamjaId).NotEmpty();
            RuleFor(x => x.KafshetId).NotEmpty();
            RuleFor(x => x.StafiId).NotEmpty();
        }
    }
}