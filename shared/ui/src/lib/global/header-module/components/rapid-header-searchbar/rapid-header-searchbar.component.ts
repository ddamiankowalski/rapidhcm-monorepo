import { Component, ChangeDetectionStrategy, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'rapid-header-searchbar',
    templateUrl: './rapid-header-searchbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidHeaderSearchbarComponent implements OnInit, OnDestroy {   
    private completeSubject: Subject<boolean> = new Subject();
    
    @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();
    public search: FormControl = new FormControl('');

    ngOnInit(): void {
        this.search.valueChanges
            .pipe(
                takeUntil(this.completeSubject),
                ).subscribe((searchValue: string) => this.searchInput.emit(searchValue))
    }

    ngOnDestroy(): void {
        this.completeSubject.next(true);
    }

    public clearSearchInput(): void {
        this.search.setValue('');
    }
}