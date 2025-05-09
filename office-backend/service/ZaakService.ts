/*
 * SPDX-FileCopyrightText: 2025 INFO.nl  
 * SPDX-License-Identifier: EUPL-1.2+
 */

export class ZaakService {
    constructor() {}

    public getZaken(zaakNummer: string): string {
        this.checkzaakNummer(zaakNummer);
        if (!this.checkzaakNummer(zaakNummer)) {
            return "Geen valide zaaknummer opgegeven";
        }
        return "Gevonden Zaken: " + zaakNummer;
    }

    private checkzaakNummer(zaakNummer: string): boolean {
        return zaakNummer == "0" || zaakNummer == null ? false : true;
    }
}