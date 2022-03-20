import { 
  Injectable,
  Injector,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Inject,
} from "@angular/core";

type GConstructor<T = {}> = new (...args: any[]) => T;

export type BaseInjectorConstructor = GConstructor<BaseClassInjector>;

@Injectable()
abstract class BaseClassInjector implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor(public injector: Injector) {}

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  ngDoCheck(): void {}
  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void {}
  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {}
  ngOnDestroy(): void {}
}

export class Base extends BaseClassInjector {};
