/**
 * @author nstCactus
 * @date 2019-05-12 15:19
 */

import vss from 'vat-siren-siret';

export default {
  SIRET: {
    mask:               '### ### ### #####',
    placeholder:        '123 456 789 00015',
    validationFunction: vss.isSIRET,
    formatFunction:     vss.formatSIRET,
  },
  SIREN: {
    mask:               '### ### ###',
    placeholder:        '123 456 789',
    validationFunction: vss.isSIREN,
    formatFunction:     vss.formatSIREN,
  },
  VAT:   {
    mask:               'XX ## ### ### ###',
    placeholder:        'FR 12 345 678 901',
    validationFunction: vss.isVAT,
    formatFunction:     vss.formatVAT,
  },
}
